import TtrpgHelper from "main";
import { App, PluginSettingTab, Setting, ValueComponent } from "obsidian";

export interface TtrpgSettings {
	statsFolder: string;
}

const DEFAULT_SETTINGS: TtrpgSettings = {
	statsFolder: "/",
};

export const loadSettings = async (plugin: TtrpgHelper) => {
	plugin.settings = Object.assign(
		{},
		DEFAULT_SETTINGS,
		await plugin.loadData()
	);
};

export const saveSettings = async (plugin: TtrpgHelper) => {
	await plugin.saveData(plugin.settings);
};

const getFolders = (app: TtrpgHelper["app"]) => {
	// @ts-ignore It literally does have this property
	const { fileMap } = app.vault;

	// ugh I'll have to fix this type later
	const folders = Object.keys(fileMap).reduce((acc, cur) => {
		if (!fileMap[cur].extension) {
			return {
				...acc,
				[cur]: cur,
			};
		}
		return acc;
	}, {});

	return folders;
};

const display = (settingsTab: TtrpgSettingsTab) => {
	const { containerEl } = settingsTab;
	const folders = getFolders(settingsTab.plugin.app);

	containerEl.empty();

	new Setting(containerEl)
		.setName("Stats Folder")
		.setDesc(
			"Select the folder name which is where you will have Stat Pages stored"
		)
		.addDropdown((comp) =>
			comp
				.addOptions(folders)
				.setValue(settingsTab.plugin.settings.statsFolder)
				.onChange(async (value) => {
					settingsTab.plugin.settings.statsFolder = value;
					await saveSettings(settingsTab.plugin);
				})
		);
};

export class TtrpgSettingsTab extends PluginSettingTab {
	plugin: TtrpgHelper;

	constructor(app: App, plugin: TtrpgHelper) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		display(this);
	}
}
