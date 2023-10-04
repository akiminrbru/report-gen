import styles from './App.module.scss';
import Audience from './components/Audience/Audience';
import Conversion from './components/Conversion/Conversion';
import Devices from './components/Devices/Devices';
import Systems from './components/Systems/Systems';
import Traffic from './components/Traffic/Traffic';
import { useGetReportQuery } from './redux/reportsApi';

const App = () => {
  const {data, isLoading} = useGetReportQuery();


  if (isLoading) return (
    <div className={styles.app__loading}>
      <h1>Загрузка...</h1>
    </div>
  )

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.app__inner}>
          <Conversion data={data[0].conversion}></Conversion>
          <Traffic data={data[0].traffic}></Traffic>
          <Systems data={data[0].systems}></Systems>
          <div className={styles.block1}>
            <Audience data={data[0].ages}></Audience>
            <Devices data={data[0].devices}></Devices>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
