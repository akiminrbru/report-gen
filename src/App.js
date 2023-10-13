import styles from './App.module.scss';
import ReportPage from './components/ReportPage/ReportPage';
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
          <ReportPage data={data}></ReportPage>
        </div>
      </div>
    </div>
  )
}

export default App;
