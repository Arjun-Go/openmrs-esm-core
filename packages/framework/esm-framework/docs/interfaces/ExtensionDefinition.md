[@openmrs/esm-framework](../API.md) / ExtensionDefinition

# Interface: ExtensionDefinition

## Hierarchy

- [`ComponentDefinition`](ComponentDefinition.md)

  ↳ **`ExtensionDefinition`**

## Table of contents

### Properties

- [appName](ExtensionDefinition.md#appname)
- [id](ExtensionDefinition.md#id)
- [meta](ExtensionDefinition.md#meta)
- [name](ExtensionDefinition.md#name)
- [offline](ExtensionDefinition.md#offline)
- [online](ExtensionDefinition.md#online)
- [order](ExtensionDefinition.md#order)
- [privilege](ExtensionDefinition.md#privilege)
- [resources](ExtensionDefinition.md#resources)
- [slot](ExtensionDefinition.md#slot)
- [slots](ExtensionDefinition.md#slots)

### Methods

- [load](ExtensionDefinition.md#load)

## Properties

### appName

• **appName**: `string`

The module/app that defines the component

#### Inherited from

[ComponentDefinition](ComponentDefinition.md).[appName](ComponentDefinition.md#appname)

#### Defined in

[packages/framework/esm-globals/src/types.ts:99](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L99)

___

### id

• `Optional` **id**: `string`

**`deprecated`** A confusing way to specify the name of the extension

#### Defined in

[packages/framework/esm-globals/src/types.ts:134](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L134)

___

### meta

• `Optional` **meta**: `Record`<`string`, `any`\>

The meta data used for reflection by other components

#### Defined in

[packages/framework/esm-globals/src/types.ts:130](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L130)

___

### name

• **name**: `string`

The name of the extension being registered

#### Defined in

[packages/framework/esm-globals/src/types.ts:124](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L124)

___

### offline

• `Optional` **offline**: `boolean` \| `object`

Defines the offline support / properties of the component.

#### Inherited from

[ComponentDefinition](ComponentDefinition.md).[offline](ComponentDefinition.md#offline)

#### Defined in

[packages/framework/esm-globals/src/types.ts:111](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L111)

___

### online

• `Optional` **online**: `boolean` \| `object`

Defines the online support / properties of the component.

#### Inherited from

[ComponentDefinition](ComponentDefinition.md).[online](ComponentDefinition.md#online)

#### Defined in

[packages/framework/esm-globals/src/types.ts:107](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L107)

___

### order

• `Optional` **order**: `number`

Specifies the relative order in which the extension renders in a slot

#### Defined in

[packages/framework/esm-globals/src/types.ts:132](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L132)

___

### privilege

• `Optional` **privilege**: `string`

Defines the access privilege required for this component, if any.

#### Inherited from

[ComponentDefinition](ComponentDefinition.md).[privilege](ComponentDefinition.md#privilege)

#### Defined in

[packages/framework/esm-globals/src/types.ts:115](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L115)

___

### resources

• `Optional` **resources**: `Record`<`string`, [`ResourceLoader`](ResourceLoader.md)<`any`\>\>

Defines resources that are loaded when the component should mount.

#### Inherited from

[ComponentDefinition](ComponentDefinition.md).[resources](ComponentDefinition.md#resources)

#### Defined in

[packages/framework/esm-globals/src/types.ts:119](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L119)

___

### slot

• `Optional` **slot**: `string`

A slot to attach to

#### Defined in

[packages/framework/esm-globals/src/types.ts:126](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L126)

___

### slots

• `Optional` **slots**: `string`[]

Slots to attach to

#### Defined in

[packages/framework/esm-globals/src/types.ts:128](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L128)

## Methods

### load

▸ **load**(): `Promise`<`any`\>

Defines a function to use for actually loading the component's lifecycle.

#### Returns

`Promise`<`any`\>

#### Inherited from

[ComponentDefinition](ComponentDefinition.md).[load](ComponentDefinition.md#load)

#### Defined in

[packages/framework/esm-globals/src/types.ts:103](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L103)
