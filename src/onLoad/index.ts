import TtrpgHelper from "main";
import {
	FileManager,
	MarkdownEditView,
	MarkdownView,
	Notice,
	TFile,
	TFolder,
	WorkspaceLeaf,
} from "obsidian";
import { TtrpgSettingsTab, loadSettings } from "src/settings";
import { ToolBarView } from "../views/ToolBarView";

export const onLoad = async (plugin: TtrpgHelper) => {
	// console.log(plugin.app);
	await loadSettings(plugin);
	plugin.addSettingTab(new TtrpgSettingsTab(plugin.app, plugin));
	// console.log(plugin);
	const parentStatFolder = plugin.app.vault.getAbstractFileByPath(
		plugin.settings.statsFolder
	) as TFolder | null;

	if (!plugin.app.workspace.layoutReady) {
		plugin.app.workspace.onLayoutReady(() => plugin.onload());
		return;
	}

	// const active = plugin.app.workspace.getActiveViewOfType(MarkdownView);
	const active = plugin.app.workspace.activeLeaf;
	console.log(active);
	active && new ToolBarView(active);

	document.getElementById("ttrpg-toolbar")?.remove();
	// const toolBar = active?.containerEl.createEl("div", {
	// 	// text: "I am a div!",
	// 	attr: {
	// 		id: "ttrpg-toolbar",
	// 	},
	// 	cls: "ttrpg-toolbar",
	// });
	// const stats0 = toolBar?.createEl("div", {
	// 	text: "Link",
	// 	attr: {
	// 		id: "ttrpg-toolbar-item-0",
	// 	},
	// 	cls: "ttrpg-toolbar-item",
	// });
	// const stats1 = toolBar?.createEl("div", {
	// 	text: "Link",
	// 	attr: {
	// 		id: "ttrpg-toolbar-item-1",
	// 	},
	// 	cls: "ttrpg-toolbar-item",
	// });
	// const stats2 = toolBar?.createEl("div", {
	// 	text: "Link",
	// 	attr: {
	// 		id: "ttrpg-toolbar-item-2",
	// 	},
	// 	cls: "ttrpg-toolbar-item",
	// });
};
