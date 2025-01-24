export type IInitialData = {
  server: IServerList[]
  leagues: ILeagueList[]
  items: IItemList[]
  filters: IFilterList[]
  static: IStaticList[]
  stats: IStatList[]
}

export type SelectData = IServerList[] | ILeagueList[]

export interface IServerList {
  id: string
  text: string
}

export interface ILeagueList {
  id: string
  realm: string
  text: string
}

export interface IItemList {
  id: string
  label: string
  entries: {
    type: string
  }[]
}

export interface IFilterList {
  id: string
  title: string
  filters: {
    fullSpan: boolean
    id: string
    option: {
      options: {
        id: string | null
        text: string
      }[],
      text: string
    }
  }[]
}

export interface IStaticList {
  id: string
  label: string
  entries: {
    id: string
    text: string
    image: string
  }[]
}

export interface IStatList {
  id: string
  label: string
  entries: {
    id: string
    text: string
    type: string
  }[]
}