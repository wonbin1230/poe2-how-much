import type { FC } from 'react'
import type { IInitialData } from '../../types'

import { Title, Content } from './style'
import { useState, useEffect } from'react'
import SelectOption from '../components/SelectOption/SelectOption'
import { POE2API } from '../../service/axiosService'

const Home: FC = () => {
  const [initialData, setInitialData] = useState<IInitialData>()

  useEffect(() => {
    const init = async () => {
      const res = await POE2API.getInitialData()
      setInitialData(res)
    }
    init()
  }, [])

  return (
    <>
      <Title>歡迎使用POE2 How Much APP</Title>
      <Content>
        {initialData 
          ? (
            <>
              <SelectOption selectType='伺服器' data={initialData.server} />
              <SelectOption selectType='聯盟' data={initialData.leagues} />
            </>
            ) 
          : "Loading..."
        }
      </Content>
    </>
  )
}

export default Home