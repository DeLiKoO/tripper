import type ObjData from "./ObjData";

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

export default TransportationData;