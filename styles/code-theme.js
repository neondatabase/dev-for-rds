const neon = Object.freeze({
  colors: {
    'activityBar.background': '#07090F',
    'activityBar.foreground': '#86A5FF',
    'activityBar.inactiveForeground': '#576dafc5',
    'activityBarBadge.background': '#86A5FF',
    'activityBarBadge.foreground': '#07090F',
    'badge.background': '#86A5FF',
    'badge.foreground': '#07090F',
    'breadcrumb.activeSelectionForeground': '#86A5FF',
    'breadcrumb.focusForeground': '#576daf',
    'breadcrumb.foreground': '#576dafa6',
    'breadcrumbPicker.background': '#07090F',
    'button.background': '#86A5FF',
    'button.foreground': '#07090F',
    'button.hoverBackground': '#A8BEFF',
    descriptionForeground: '#576daf79',
    'diffEditor.diagonalFill': '#15182B',
    'diffEditor.insertedTextBackground': '#64d3892c',
    'diffEditor.removedTextBackground': '#dd50742c',
    'dropdown.background': '#15182B',
    'dropdown.foreground': '#c7d5ff99',
    'editor.background': '#07090F',
    'editor.findMatchBackground': '#576daf',
    'editor.findMatchHighlightBackground': '#262E47',
    'editor.inactiveSelectionBackground': '#262e47be',
    'editor.selectionBackground': '#262E47',
    'editor.selectionHighlightBackground': '#262E47',
    'editor.wordHighlightBackground': '#262E47',
    'editor.wordHighlightStrongBackground': '#262E47',
    'editorCodeLens.foreground': '#262E47',
    'editorCursor.background': '#01030b',
    'editorCursor.foreground': '#86A5FF',
    'editorGroup.background': '#07090F',
    'editorGroup.border': '#15182B',
    'editorGroup.dropBackground': '#0C0E19',
    'editorGroup.emptyBackground': '#07090F',
    'editorGroupHeader.tabsBackground': '#07090F',
    'editorLineNumber.activeForeground': '#576dafd8',
    'editorLineNumber.foreground': '#262e47bb',
    'editorWidget.background': '#15182B',
    'editorWidget.border': '#576daf',
    'extensionButton.prominentBackground': '#C7D5FF',
    'extensionButton.prominentForeground': '#07090F',
    focusBorder: '#262E47',
    foreground: '#576daf',
    'gitDecoration.addedResourceForeground': '#64d389fd',
    'gitDecoration.deletedResourceForeground': '#dd5074',
    'gitDecoration.ignoredResourceForeground': '#576daf90',
    'gitDecoration.modifiedResourceForeground': '#c778db',
    'gitDecoration.untrackedResourceForeground': '#576daf90',
    'icon.foreground': '#576daf',
    'input.background': '#15182B',
    'input.foreground': '#86A5FF',
    'inputOption.activeForeground': '#86A5FF',
    'inputValidation.errorBackground': '#dd5073',
    'inputValidation.errorBorder': '#dd5073',
    'inputValidation.errorForeground': '#07090F',
    'list.activeSelectionBackground': '#000000',
    'list.activeSelectionForeground': '#86A5FF',
    'list.dropBackground': '#000000',
    'list.errorForeground': '#dd5074',
    'list.focusBackground': '#01030b',
    'list.focusForeground': '#86A5FF',
    'list.highlightForeground': '#A8BEFF',
    'list.hoverBackground': '#000000',
    'list.hoverForeground': '#A8BEFF',
    'list.inactiveFocusBackground': '#01030b',
    'list.inactiveSelectionBackground': '#000000',
    'list.inactiveSelectionForeground': '#86A5FF',
    'list.warningForeground': '#e6db7f',
    'notificationCenterHeader.background': '#15182B',
    'notifications.background': '#15182B',
    'panel.border': '#15182B',
    'panelTitle.activeBorder': '#86A5FF',
    'panelTitle.activeForeground': '#C7D5FF',
    'panelTitle.inactiveForeground': '#576daf',
    'peekViewTitle.background': '#262E47',
    'quickInput.background': '#0C0E19',
    'scrollbar.shadow': '#01030b',
    'scrollbarSlider.activeBackground': '#576daf',
    'scrollbarSlider.background': '#262E47',
    'scrollbarSlider.hoverBackground': '#576daf',
    'selection.background': '#01030b',
    'sideBar.background': '#07090F',
    'sideBar.border': '#15182B',
    'sideBarSectionHeader.background': '#07090F',
    'sideBarSectionHeader.foreground': '#86A5FF',
    'statusBar.background': '#86A5FF',
    'statusBar.debuggingBackground': '#c778db',
    'statusBar.foreground': '#07090F',
    'tab.activeBackground': '#07090F',
    'tab.activeBorder': '#86A5FF',
    'tab.activeForeground': '#C7D5FF',
    'tab.border': '#07090F',
    'tab.inactiveBackground': '#07090F',
    'tab.inactiveForeground': '#576dafd8',
    'terminal.ansiBrightRed': '#dd5073',
    'terminal.ansiGreen': '#63eb90',
    'terminal.ansiRed': '#dd5073',
    'terminal.foreground': '#A8BEFF',
    'textLink.foreground': '#86A5FF',
    'titleBar.activeBackground': '#07090F',
    'titleBar.activeForeground': '#86A5FF',
    'titleBar.inactiveBackground': '#07090F',
    'tree.indentGuidesStroke': '#576daf',
    'widget.shadow': '#01030b',
  },
  displayName: 'Neon',
  name: 'neon',
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: '#546E7A',
      },
    },
    {
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {
        foreground: '#f8f8f2',
      },
    },
    {
      scope: ['constant.other.color'],
      settings: {
        foreground: '#ffffff',
      },
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: [
        'keyword.control',
        'constant.other.color',
        'punctuation',
        'meta.tag',
        'punctuation.definition.tag',
        'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'punctuation.section.embedded',
        'keyword.other.template',
        'keyword.other.substitution',
      ],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {
        foreground: '#f6558c',
      },
    },
    {
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function',
        'keyword.other.special-method',
      ],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['meta.block variable.other'],
      settings: {
        foreground: '#f6558c',
      },
    },
    {
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: '#f6558c',
      },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'support.constant',
        'constant.character',
        'constant.escape',
        'variable.parameter',
        'keyword.other.unit',
        'keyword.other',
      ],
      settings: {
        foreground: '#f6558c',
      },
    },
    {
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'markup.heading',
        'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {
        foreground: '#47d18c',
      },
    },
    {
      scope: [
        'entity.name',
        'support.type',
        'support.class',
        'support.orther.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'markup.changed.git_gutter',
        'support.type.sys-types',
      ],
      settings: {
        foreground: '#ecec79',
      },
    },
    {
      scope: ['support.type'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
      ],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['entity.name.module.js', 'variable.import.parameter.js', 'variable.other.class.js'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      scope: ['variable.language'],
      settings: {
        fontStyle: 'italic',
        foreground: '#FF5370',
      },
    },
    {
      scope: ['entity.name.method.js'],
      settings: {
        fontStyle: 'italic',
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['text.html.basic entity.other.attribute-name.html', 'text.html.basic entity.other.attribute-name'],
      settings: {
        fontStyle: 'italic',
        foreground: '#ecec79',
      },
    },
    {
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: '#ecec79',
      },
    },
    {
      scope: ['source.sass keyword.control'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['markup.inserted'],
      settings: {
        foreground: '#47d18c',
      },
    },
    {
      scope: ['markup.deleted'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      scope: ['markup.changed'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['string.regexp'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['constant.character.escape'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: ['tag.decorator.js entity.name.tag.js', 'tag.decorator.js punctuation.definition.tag.js'],
      settings: {
        fontStyle: 'italic',
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: {
        fontStyle: 'italic',
        foreground: '#FF5370',
      },
    },
    {
      scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#ecec79',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#f6558c',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#C17E70',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#f6558c',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#47d18c',
      },
    },
    {
      scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
      settings: {
        foreground: '#f8f8f2',
      },
    },
    {
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      scope: [
        'markdown.heading',
        'markup.heading | markup.heading entity.name',
        'markup.heading.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: '#47d18c',
      },
    },
    {
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: '#f6558c',
      },
    },
    {
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: '#f6558c',
      },
    },
    {
      scope: [
        'markup.bold markup.italic',
        'markup.italic markup.bold',
        'markup.quote markup.bold',
        'markup.bold markup.italic string',
        'markup.italic markup.bold string',
        'markup.quote markup.bold string',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: '#f6558c',
      },
    },
    {
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: '#f6558c',
      },
    },
    {
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['string.other.link.description.title.markdown'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: '#ecec79',
      },
    },
    {
      scope: ['markup.raw.block'],
      settings: {
        foreground: '#66a3ff',
      },
    },
    {
      scope: ['markup.raw.block.fenced.markdown'],
      settings: {
        foreground: '#00000050',
      },
    },
    {
      scope: ['punctuation.definition.fenced.markdown'],
      settings: {
        foreground: '#00000050',
      },
    },
    {
      scope: ['markup.raw.block.fenced.markdown', 'variable.language.fenced.markdown', 'punctuation.section.class.end'],
      settings: {
        foreground: '#f8f8f2',
      },
    },
    {
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      scope: ['meta.separator'],
      settings: {
        fontStyle: 'bold',
        foreground: '#65737E',
      },
    },
    {
      scope: ['markup.table'],
      settings: {
        foreground: '#f8f8f2',
      },
    },
  ],
  type: 'dark',
});

export { neon as default };
