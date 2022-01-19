import ObjData from "./ObjData";

export interface VisitData extends ObjData<ObjData.Type.VisitData> {
	label: string;
	lat: number;
	lng: number;
}

export namespace VisitData {
	export function from(obj: ObjData<ObjData.Type>) {
		if (obj.class === ObjData.Type.VisitData) {
			return obj as VisitData;
		} else {
			return undefined;
		}
	}

	export const DEFAULT_OBJECT: VisitData = {
		class: ObjData.Type.VisitData,
		label: 'Origin',
		lat: 0,
		lng: 0,
	};

	export function newObject(from: VisitData = DEFAULT_OBJECT): VisitData {
		let instance = {};
		Object.assign(instance, from);
		delete instance['id'];
		return instance as VisitData;
	}

}

export default VisitData;