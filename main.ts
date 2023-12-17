import {
	App,
	Editor,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting,
} from "obsidian";
import { onLoad } from "src/onLoad";
import { TtrpgSettings, TtrpgSettingsTab } from "src/settings";

// Remember to rename these classes and interfaces!

export default class TtrpgHelper extends Plugin {
	settings: TtrpgSettings;

	async onload() {
		onLoad(this);
	}

	onunload() {
		// @ts-expect-error IDK TODO ???
		delete window[this.settings.statsFolder];
	}
}
