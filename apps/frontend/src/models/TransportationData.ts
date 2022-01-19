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
		if (obj.class === ObjData.Type.TransportationData) {
			return obj as TransportationData;
		} else {
			return undefined;
		}
	}

	export const DEFAULT_OBJECT: TransportationData = {
		class: ObjData.Type.TransportationData,
		mode: 'Car',
		distance: 0,
		distanceUnit: 'km',
		estimatedDurationInMinutes: 0,
	};

	export function newObject(
		from: TransportationData = DEFAULT_OBJECT
	): TransportationData {
		let instance = {};
		instance = Object.assign(instance, from);
		delete instance['id'];
		return instance as TransportationData;
	}
}


export default TransportationData;