import styles from './App.module.css'
import Form from './components/Form/Form'
import useWeather from './hooks/useWeather'

export default function App() {

  const { fetchWeather } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <p>
          <Form 
            fetchWeather={fetchWeather}
          />
        </p>
        <p>2</p>
      </div>
    </>
  )
}

