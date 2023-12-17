// import React from "react";
import { StrictMode } from "react";
import { ItemView, WorkspaceLeaf } from "obsidian";
import { Root, createRoot } from "react-dom/client";
import { ToolBar } from "../../components/ToolBar";

const TOOLBAR_VIEW = "toolbar-view";

export class ToolBarView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return TOOLBAR_VIEW;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<ToolBar />,
			</StrictMode>
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}
