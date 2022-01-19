import ObjData from "./ObjData";

export interface VisitData extends ObjData<ObjData.Type.VisitData> {
	label: string;
	lat: number;
	lng: number;
}

export namespace VisitData {
	export function from(obj: ObjData<ObjData.Type>) {
		if(obj.class === ObjData.Type.VisitData) {
			return obj as VisitData;
		} else {
			return undefined;
		}
	}
}

export default VisitData;