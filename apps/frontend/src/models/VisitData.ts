import type ObjData from "./ObjData";

export interface VisitData extends ObjData<ObjData.Type.VisitData> {
	label: string;
	lat: number;
	lng: number;
}

export default VisitData;