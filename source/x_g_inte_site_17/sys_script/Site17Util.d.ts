/// <reference path="../../types/server/sn_typings_server_scoped/index.d.ts" />
interface ISite17UtilBase extends $$snClass.ICustomClassBase<ISite17UtilBase, "Site17Util"> {
    isDnContainedBy(sourceDN: string, containerDN: string): "true" | "false";
    getUsersContainerDN(): string;
    getGroupsContainerDN(): string;
    includeEmptyUserSource(): "true" | "false";
    includeEmptyGroupSource(): "true" | "false";
    isUserDN(sourceDN: string): "true" | "false";
    isGroupDN(sourceDN: string): "true" | "false";
    isSite17User(source: string): "true" | "false";
    isSite17Group(sys_user_group: string): "true" | "false";
}
interface ISite17UtilPrototype extends $$snClass.ICustomClassPrototype0<ISite17UtilBase, ISite17UtilPrototype, "Site17Util">, ISite17UtilBase {
}
declare type Site17Util = Readonly<ISite17UtilBase>;
interface Site17UtilConstructor extends $$snClass.CustomClassConstructor0<ISite17UtilBase, ISite17UtilPrototype, Site17Util> {
    isUser(target: GlideRecord | GlideElementReference): boolean;
    isGroup(target: GlideRecord | GlideElementReference): boolean;
    isVip(target: GlideRecord | GlideElementReference): boolean;
    isBusinessUnit(target: GlideRecord | GlideElementReference): boolean;
    isDepartment(target: GlideRecord | GlideElementReference): boolean;
    isCompany(target: GlideRecord | GlideElementReference): boolean;
    isLocation(target: GlideRecord | GlideElementReference): boolean;
    isBuilding(target: GlideRecord | GlideElementReference): boolean;
    getBusinessUnit(target: GlideRecord | GlideElementReference): GlideRecord | GlideElementReference | undefined;
    getCompany(target: GlideRecord | GlideElementReference): GlideRecord | GlideElementReference | undefined;
    getLocation(target: GlideRecord | GlideElementReference): GlideRecord | GlideElementReference | undefined;
    isLocation(target: GlideRecord | GlideElementReference): boolean;
    getCaller(target: GlideRecord | GlideElementReference): GlideElementReference | undefined;
    testDistinguishedName(value: string): boolean;
    isDnContainedBy(sourceDN: string, containerDN: string): boolean;
    getUsersContainerDN(): string;
    getGroupsContainerDN(): string;
    includeEmptyUserSource(): boolean;
    includeEmptyGroupSource(): boolean;
    isUserDN(sourceDN: string): boolean;
    isGroupDN(sourceDN: string): boolean;
    isSite17User(source: GlideRecord | GlideElementReference | string): boolean;
    isSite17Group(sys_user_group: GlideRecord | GlideElementReference | string): boolean;
}
declare const Site17Util: Site17UtilConstructor;
