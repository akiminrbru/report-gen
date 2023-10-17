import Header from '../Header/Header';
import styles from './ProjectsPage.module.scss';
import plus from '../../assets/plus.svg';
import search from '../../assets/search.svg';
import { useGetAllProjectsQuery } from '../../redux';
import { ProjectsCard } from './ProjectsCard';
import ProjectsForm from './ProjectsForm';
import { useState } from 'react';
import Loader from "react-js-loader";
import { useSelector } from 'react-redux';


const ProjectsPage = () => {
    const {data, isLoading, error} = useGetAllProjectsQuery();
    
    let [isOpen, setIsOpen] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // console.log(data);
    
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchText(query);
    
        const filteredResults = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
    
        // setSearchResults(filteredResults);
        console.log(filteredResults)
    };
    

    // console.log(data);

    if (isLoading) return (
        <div className={styles.projects__loading}>
          <Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
        </div>
    )

    return (
        <>
            <Header></Header>
            <main className={styles.projects}>
                <div className='container'>
                    <div className={styles.projects__inner}>
                        <div className={styles.projects__panel}>
                            <button onClick={() => setIsOpen(true)} className={styles.projects__add}>
                                <img src={plus}></img> Добавить проект
                            </button>
                            <div className={styles.projects__search}>
                                <input type='text' value={searchText} onChange={handleInputChange} placeholder='Поиск'></input>
                                <img src={search}></img>
                            </div>
                        </div>
                        <div className={styles.projects__list}>
                        <ul>
                            {/* {searchResults.map((result, index) => (
                            <li key={index}>{result}</li>
                            ))} */}
                        </ul>
                            {
                                data === null ? <div>Список проеков пуст</div> : data.map(el => <ProjectsCard data={el} key={el.id}></ProjectsCard>)
                            }
                        </div>
                    </div>
                </div>
            </main>
            <ProjectsForm isOpen={isOpen} setIsOpen={setIsOpen}></ProjectsForm>
        </>
    )
}

export default ProjectsPage;