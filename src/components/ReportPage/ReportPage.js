import React from 'react'
import styles from './ReportPage.module.scss'
import Conversion from '../Conversion/Conversion'
import Traffic from '../Traffic/Traffic'
import Systems from '../Systems/Systems'
import Audience from '../Audience/Audience'
import Devices from '../Devices/Devices'
import img1 from '../../assets/32.png';

const ReportPage = ({data}) => {
  return (
    <>
        <div className={styles.block0}>
            <p>Продвижение сайта: test.ru</p>
            <h1>Продвижение сайта в поисковых системах</h1>
            <p>Отчет за период: 24.07.2023-23.08.2023гг.</p>
        </div>
        <div className={styles.block1}>
            <h2>1. Видимость по семантическому ядру</h2>
            <p>Видимость сайта определяет вероятность, с которой пользователь увидит сайт в поисковой системе, при поиске по запросу из семантического ядра.</p>
            <a href='https://docs.google.com/spreadsheets/d/1361Yg73IWfDszNRHF75mUJFq7JLK4-5l_thI2vsrtnQ/edit#gid=498478789'>Видимость сайта по семантическому ядру 24 августа 2023 года</a>
            <table>
                <thead>
                    <tr>
                        <td>Период</td>
                        <td>Количество ключей</td>
                        <td>Общая видимость</td>
                        <td>Видимость по Яндексу</td>
                        <td>Видимость по Google</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>24.05.23 - 23.06.23</td>
                        <td>107</td>
                        <td>18,28%</td>
                        <td>28,97%</td>
                        <td>3,8%</td>
                    </tr>
                    <tr>
                        <td>24.06.23 - 23.07.23</td>
                        <td>142</td>
                        <td>15%</td>
                        <td>19%</td>
                        <td>1,5%</td>
                    </tr>
                    <tr>
                        <td>24.07.23 - 23.08.23</td>
                        <td>176</td>
                        <td>14%</td>
                        <td>16%</td>
                        <td>6%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div></div>
        <Conversion data={data[0].conversion} className={styles.block2}></Conversion>
        <Traffic data={data[0].traffic}></Traffic>
        <Systems data={data[0].systems}></Systems>
        <div className={styles.block5}>
            <Audience data={data[0].ages}></Audience>
            <Devices data={data[0].devices}></Devices>
        </div>
        <div className={styles.block7}>
            <h2>7.Проведенные работы за месяц по сайту:</h2>
            <p>
                1.Проверили тексты на спамность и оригинальность
            </p>
            <a href='https://docs.google.com/document/d/1BIirRHPxIxgx3cOgdsQkpumLAxrv2xNe_LMNgKYN7FI/edit'>https://docs.google.com/document/d/1BIirRHPxIxgx3cOgdsQkpumLAxrv2xNe_LMNgKYN7FI/edit</a>
            <p>2.Реализовали на сайте страницу “Справочник”</p>
            <a href='https://clinicbc.ru/spravochnik/'>https://clinicbc.ru/spravochnik/</a>
            <p>3.Добавили страницы в справочник</p>
            <a href='https://clinicbc.ru/metody-lecheniya/osteopatiya/'>https://clinicbc.ru/metody-lecheniya/osteopatiya/</a>
            <a href='https://clinicbc.ru/metody-lecheniya/osteopatiya/'>https://clinicbc.ru/metody-lecheniya/osteopatiya/</a>
            <a href='https://clinicbc.ru/metody-lecheniya/osteopatiya/'>https://clinicbc.ru/metody-lecheniya/osteopatiya/</a>
            <p>4.Опубликовали статьи на сайте</p>
            <a href='https://clinicbc.ru/metody-lecheniya/osteopatiya/'>https://clinicbc.ru/metody-lecheniya/osteopatiya/</a>
            <a href='https://clinicbc.ru/metody-lecheniya/osteopatiya/'>https://clinicbc.ru/metody-lecheniya/osteopatiya/</a>
            <a href='https://clinicbc.ru/metody-lecheniya/osteopatiya/'>https://clinicbc.ru/metody-lecheniya/osteopatiya/</a>
            <p>5. и тд много пунктов...</p>
        </div>
        <div className={styles.block8}>
            <h2>8.Планы на следующий период</h2>
            <ol>
                <li>Мониторинг информации в сервисах Яндекс.Вебмастер, Google Search Console</li>
                <li>Анализ поведенческих факторов на сайте. Анализ динамики и качества трафика</li>
                <li>Работа с семантикой, увеличение количества ключей</li>
                <li>Написание кластеризации и оптимизации по новому ядру</li>
                <li>Написание и размещение текстов на страницах сайта</li>
                <li>Работа с репутацией (SERM). Подбор площадок написание отзывов (1-2 в месяц)</li>
                <li>Исправление технических ошибок исходя их тех.аудита, верстка блоков</li>
                <li>Работа с документами правовой информации и интеграции страницы с правовыми документами</li>
                <li>Добавление нового филиала на сайт</li>
            </ol>
        </div>
        <div>
            <h2>Наши контакты</h2>
            <div>
                <p>Позвоните по телефону:</p>
                <a>+7 928 100 2325</a>
            </div>
            <div>
                <p>Или отправьте заявку:</p>
                <a>d.terehina@rbru.ru</a>
            </div>
            <div>
                <p>Адрес:</p>
                <p>г. Ростов-на-Дону, пр. Буденновский, 80, оф. 436, (4-й этаж)</p>
            </div>
            <img src={img1}></img>
        </div>
    </>
  )
}

export default ReportPage