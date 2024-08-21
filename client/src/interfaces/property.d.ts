interface Iproperty {
  id: string | number;
  name: string;
  imageUrl: string;
  location: string;
  description: string;
  area: number;
  amount: number;
  percentage: number;
  equity?: number;
}

interface ILandDescProps {
  name: string;
  location: string;
  room?: number;
  bathroom?: number;
  area?: number;
  parking?: string;
  description?:string
}
