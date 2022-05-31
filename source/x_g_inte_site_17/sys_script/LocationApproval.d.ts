/// <reference path="../servicnowCommon.d.ts" />
interface ILocationApprovalBase extends ICustomClassBase<ILocationApprovalBase, "LocationApproval"> {
    /**
     * The target {@link GlideRecord}.
     *
     * @type {GlideRecord}
     * @memberof ILocationApprovalBase
     * @private
     */
    _gliderecord?: GlideRecord;
    /**
     * Gets the target user of the target record (ie. caller, requested_for).
     *
     * @returns {(GlideRecord | GlideElementReference | undefined)} The {@link GlideRecord} or {@link GlideElementReference} for the target user.
     */
    getCaller(): GlideRecord | GlideElement | undefined;
    /**
     * Indicates whether the target user is a VIP user.
     *
     * @returns {boolean} true if {@link ILocationApprovalBase#getCaller} returns user designated as VIP; otherwise, false.
     */
    isVip(): boolean;
    /**
     * Looks up the default approval group.
     *
     * @returns {(GlideElementReference | undefined)} The{@link GlideElementReference} for the default aproval group.
     */
    getDefaultApprovalGroup(): GlideElementReference | undefined;
}
interface ILocationApprovalPrototype extends ICustomClassPrototype1<ILocationApprovalBase, ILocationApprovalPrototype, "LocationApproval", GlideRecord | GlideElementReference>, ILocationApprovalBase {
}
interface ILocationApproval extends Readonly<ILocationApprovalBase> {
}
interface LocationApprovalConstructor extends CustomClassConstructor1<ILocationApprovalBase, ILocationApprovalPrototype, ILocationApproval, GlideRecord | GlideElementReference> {
    /**
     * Creates a new {@link LocationApproval} instance.
     *
     * @constructor
     * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
     * @memberof LocationApprovalConstructor
     * @returns {ILocationApproval} A new {@link LocationApproval} instance.
     */
    new (source: GlideRecord | GlideElementReference): ILocationApproval;
    /**
     * Creates a new {@link LocationApproval} instance.
     *
     * @constructor
     * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
     * @memberof LocationApprovalConstructor
     * @returns {ILocationApproval} A new {@link LocationApproval} instance.
     */
    (source: GlideRecord | GlideElementReference): ILocationApproval;
    /**
     * Looks up the default approval group.
     *
     * @param {(string | GlideRecord | GlideElementReference)} source - The source object for the approval context.
     * @returns {(GlideElementReference | undefined)} The{@link GlideElementReference} for the default aproval group.
     */
    getDefaultApprovalGroup(source: GlideRecord | GlideElementReference): GlideElementReference | undefined;
}
declare const LocationApproval: LocationApprovalConstructor;