interface Objects {
  all?: number;
  lon?: number;
  lat?: number;
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  type?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  id?: number;
  main?: string;
  speed?: number;
  deg?: number;
  timezone?: number;
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
  weather?: weatherOption[] | any;
  wind?: Objects;
  description?: string;
  favoriteState?: boolean | any;
}