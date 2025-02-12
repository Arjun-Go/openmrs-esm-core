[@openmrs/esm-framework](../API.md) / ComponentDefinition

# Interface: ComponentDefinition

## Hierarchy

- **`ComponentDefinition`**

  ↳ [`ExtensionDefinition`](ExtensionDefinition.md)

  ↳ [`PageDefinition`](PageDefinition.md)

## Table of contents

### Properties

- [appName](ComponentDefinition.md#appname)
- [offline](ComponentDefinition.md#offline)
- [online](ComponentDefinition.md#online)
- [privilege](ComponentDefinition.md#privilege)
- [resources](ComponentDefinition.md#resources)

### Methods

- [load](ComponentDefinition.md#load)

## Properties

### appName

• **appName**: `string`

The module/app that defines the component

#### Defined in

[packages/framework/esm-globals/src/types.ts:99](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L99)

___

### offline

• `Optional` **offline**: `boolean` \| `object`

Defines the offline support / properties of the component.

#### Defined in

[packages/framework/esm-globals/src/types.ts:111](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L111)

___

### online

• `Optional` **online**: `boolean` \| `object`

Defines the online support / properties of the component.

#### Defined in

[packages/framework/esm-globals/src/types.ts:107](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L107)

___

### privilege

• `Optional` **privilege**: `string`

Defines the access privilege required for this component, if any.

#### Defined in

[packages/framework/esm-globals/src/types.ts:115](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L115)

___

### resources

• `Optional` **resources**: `Record`<`string`, [`ResourceLoader`](ResourceLoader.md)<`any`\>\>

Defines resources that are loaded when the component should mount.

#### Defined in

[packages/framework/esm-globals/src/types.ts:119](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L119)

## Methods

### load

▸ **load**(): `Promise`<`any`\>

Defines a function to use for actually loading the component's lifecycle.

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/framework/esm-globals/src/types.ts:103](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L103)
