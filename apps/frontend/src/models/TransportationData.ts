import ObjData from "./ObjData";
import VisitData from "./VisitData";

export interface TransportationData extends ObjData<ObjData.Type.TransportationData> {
	mode: string;
	distance: number;
	distanceUnit: "mi" | "km";
	estimatedDurationInMinutes: number;
	from: VisitData;
	to: VisitData;
}

export namespace TransportationData {
	export function from(obj: ObjData<ObjData.Type>) {
		if (obj.class === ObjData.Type.TransportationData) {
			return obj as TransportationData;
		} else {
			throw new Error('obj.class !== ObjData.Type.TransportationData');
		}
	}

	export const DEFAULT_OBJECT: TransportationData = {
		class: ObjData.Type.TransportationData,
		mode: 'Car',
		distance: 0,
		distanceUnit: 'km',
		estimatedDurationInMinutes: 0,
		from: VisitData.newObject({
			class: ObjData.Type.VisitData,	
			label: 'Origin',
			lat: 0,
			lng: 0,
			timezone: 'UTC',
		}),
		to: VisitData.newObject({
			class: ObjData.Type.VisitData,	
			label: 'Origin',
			lat: 0,
			lng: 0,
			timezone: 'UTC',
		}),
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