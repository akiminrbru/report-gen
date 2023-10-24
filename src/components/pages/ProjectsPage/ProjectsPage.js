import Header from '../../Header/Header';
import styles from './ProjectsPage.module.scss';
import plus from '../../../assets/plus.svg';
import search from '../../../assets/search.svg';
import { useGetAllProjectsQuery } from '../../../redux';
import { ProjectsCard } from './ProjectsCard';
import ProjectsForm from './ProjectsForm';
import { useState, useMemo } from 'react';
import Loader from "react-js-loader";


const ProjectsPage = () => {
    const [searchText, setSearchText] = useState('');
    const {data, isLoading, error} = useGetAllProjectsQuery();
    
    let [isOpen, setIsOpen] = useState(false);

    const searchResults = useMemo(() => {
        if (!data) {
            return [];
        }

        return data.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }, [data, searchText]);
        
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };
    

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
                            {
                                data === null ? <div>Список проеков пуст</div> : searchResults.map(el => <ProjectsCard data={el} key={el.id}></ProjectsCard>)
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