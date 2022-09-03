interface Objects {
  all?: number;
  lon?: number;
  lat?: number;
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  type?: number;
  country?: string;
  sunrise?: number;
  id?: number;
  main?: string;
  speed?: number;
  deg?: number;
}

interface weatherOption {
  description?: string;
  icon?: string;
  id?: number;
  main?: string;
}

export interface ListCities {
  base?: string;
  clouds?: Objects;
  cod?: number;
  coord?: Objects;
  dt?: number;
  id?: number;
  main?: Objects;
  name?: string;
  sys?: Objects;
  timezone?: number;
  visibility?: number;
  weather?: weatherOption[];
  wind?: Objects;
  description?: string;
}