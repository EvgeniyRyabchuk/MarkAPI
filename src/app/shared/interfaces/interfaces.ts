export interface IStorage {
  id: number;
  count: number;
  name: string;
  provider: string;
}

export interface IWorker {
  id: number;
  name: string;
  position: string; 
  rate: string; 
}
