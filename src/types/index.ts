export type VehicleItem = {
  MakeId: number,
  MakeName: string,
  VehicleTypeId: number,
  VehicleTypeName: string
}

export type Vehicles = {
  Count: number, 
  Message: string,
  SearchCriteria: string,
  Results: Array<VehicleItem>
}

export type DefinedVehicle = {
Count: number,
Message: string,
SearchCriteria: string,
Results: {
    "Make_ID": number,
    "Make_Name": string,
    "Model_ID": number,
    "Model_Name": string
  }[]
}