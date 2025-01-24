import type { AxiosInstance } from "axios";
import type { IInitialData } from "../types"

import axios from "axios";

class POE2APIService {
	private axiosClient: AxiosInstance;
  private localClient: AxiosInstance;

	constructor() {
		this.axiosClient = axios.create({
			baseURL: "https://pathofexile.tw",
			headers: {
				"Content-Type": "application/json",
			},
		});

    this.axiosClient.interceptors.response.use(
      response => response,
      error => {
        throw new Error(error.message)
      }
    )

    this.localClient = axios.create({
      baseURL: "../poe2"
    })

    this.localClient.interceptors.response.use(
      response => response,
      error => {
        throw new Error(error.message)
      }
    )
	}

  public async getInitialData(): Promise<IInitialData> {
    return {
      server: this.getServer(),
      leagues: await this.getLeagues(),
      filters: await this.getFilters(),
      items: await this.getItems(),
      static: await this.getStatic(),
      stats: await this.getStats()
    }
  }

  private getServer() {
    return [
      { id: "TW", text: "台服" }
    ]
  }

	private async getLeagues() {
    const leaguesResponse = await this.axiosClient.get("/api/trade2/data/leagues");
		return leaguesResponse.data.result
	}

  private async getFilters() {
    const filterResponse = await this.localClient.get("filters.json")
    return filterResponse.data.result
  }

  private async getItems() {
    const itemResponse = await this.localClient.get("items.json")
    return itemResponse.data.result
  }

  private async getStatic() {
    const staticResponse = await this.localClient.get("static.json")
    return staticResponse.data.result
  }

  private async getStats() {
    const statsResponse = await this.localClient.get("stats.json")
    return statsResponse.data.result
  }
}

export const POE2API = new POE2APIService();
