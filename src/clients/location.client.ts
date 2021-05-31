import { AxiosError, AxiosResponse } from 'axios';
import { DestinationObjectOptions, LoggerOptions } from 'pino';
import { IAxiosCacheAdapterOptions } from 'axios-cache-adapter';
import { Location, LocationArea, NamedAPIResourceList, PalParkArea, Region } from '../models';
import { Endpoints } from '../constants';
import { BaseClient } from '../structures/base';

/**
 * ### Location Client
 *
 * Client used to access the Location Endpoints:
 *  - Locations
 *  - Location Areas
 *  - Pal Park Areas
 *  - Regions
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#locations-section)
 */
export class LocationClient extends BaseClient {
  /**
   * @param logOptions Options for the logger.
   * @param logDestination Options for the logs destination.
   * @param cacheOptions Options for the axios-cache.
   */
  constructor(
    logOptions?: LoggerOptions,
    logDestination?: DestinationObjectOptions,
    cacheOptions?: IAxiosCacheAdapterOptions
  ) {
    super(logOptions, logDestination, cacheOptions);
  }

  /**
   * Get a Location by it's name
   * @param name The Location name
   * @returns A Location
   */
  public async getLocationByName(name: string): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Location}/${name}`)
        .then((response: AxiosResponse<Location>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Location by it's ID
   * @param id The Location ID
   * @returns A location
   */
  public async getLocationById(id: number): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Location}/${id}`)
        .then((response: AxiosResponse<Location>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Location Area by it's name
   * @param name The Location Area name
   * @returns A Location Area
   */
  public async getLocationAreaByName(name: string): Promise<LocationArea> {
    return new Promise<LocationArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.LocationArea}/${name}`)
        .then((response: AxiosResponse<LocationArea>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Location Area by it's ID
   * @param id The Location Area ID
   * @returns A Location Area
   */
  public async getLocationAreaById(id: number): Promise<LocationArea> {
    return new Promise<LocationArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.LocationArea}/${id}`)
        .then((response: AxiosResponse<LocationArea>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Pal Park Area by it's name
   * @param name The Pal Park Area name
   * @returns A Pal Park Area
   */
  public async getPalParkAreaByName(name: string): Promise<PalParkArea> {
    return new Promise<PalParkArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.PalParkArea}/${name}`)
        .then((response: AxiosResponse<PalParkArea>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Pal Park Area by it's ID
   * @param id The Pal Park Area ID
   * @returns A Pal Park Area
   */
  public async getPalParkAreaById(id: number): Promise<PalParkArea> {
    return new Promise<PalParkArea>((resolve, reject) => {
      this.api
        .get(`${Endpoints.PalParkArea}/${id}`)
        .then((response: AxiosResponse<PalParkArea>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Region by it's name
   * @param name The Region name
   * @returns A Region
   */
  public async getRegionByName(name: string): Promise<Region> {
    return new Promise<Region>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Region}/${name}`)
        .then((response: AxiosResponse<Region>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Region by it's ID
   * @param id The Region ID
   * @returns A Region
   */
  public async getRegionById(id: number): Promise<Region> {
    return new Promise<Region>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Region}/${id}`)
        .then((response: AxiosResponse<Region>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Locations
   * @param offset The first item that you will get
   * @param limit How many Locations per page
   * @returns A list of Locations
   */
  public async listLocations(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Location}?offset=${offset || 0}&limit=${limit || 20}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Location Areas
   * @param offset The first item that you will get
   * @param limit How many Locations per page
   * @returns A list of Location Areas
   */
  public async listLocationAreas(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.LocationArea}?offset=${offset || 0}&limit=${limit || 20}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Pal Park Areas
   * @param offset The first item that you will get
   * @param limit How many Pal Park Areas per page
   * @returns A list of Pal Park Areas
   */
  public async listPalParkAreas(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.PalParkArea}?offset=${offset || 0}&limit=${limit || 20}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Regions
   * @param offset The first item that you will get
   * @param limit How many Regions per page
   * @returns A list of Regions
   */
  public async listRegions(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get(`${Endpoints.Region}?offset=${offset || 0}&limit=${limit || 20}`)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
