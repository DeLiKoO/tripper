import ObjData from "./ObjData";

export interface TransportationData extends ObjData<ObjData.Type.TransportationData> {
	mode: string;
	distance: number;
	distanceUnit: "mi" | "km";
	estimatedDurationInMinutes: number;
	// departureTime: Date;
	// fromTimezone: string;
	// arrivalTime: Date;
	// toTimezone: string;
}

export namespace TransportationData {
	export function from(obj: ObjData<ObjData.Type>) {
		if(obj.class === ObjData.Type.TransportationData) {
			return obj as TransportationData;
		} else {
			return undefined;
		}
	}
}

export default TransportationData;