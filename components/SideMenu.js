import { useEffect, useState } from 'react';
import styles from '../styles/SideMenu.module.css';

function SideMenu(props) {
    
    const [inputProps, setInputProps] = useState(props.selectedContentToRead);
    const [subMenuOpen, setSubMenuOpen] = useState({});

    // {articleIndex: 0, sectionIndex: 0}
    useEffect(() => {
        setInputProps(props.selectedContentToRead);
    }, [props.selectedContentToRead]);

    useEffect(() => {
        const index = inputProps.sectionIndex;
        console.log(index, ' index ===================');
        if (index > -1) {
            setSubMenuOpen({[index]: true});
        }
    }, [inputProps]);
    
    const handleSubMenuClick = (index) => {
        setSubMenuOpen({
            ...subMenuOpen, [index]: !subMenuOpen[index]
        });
        console.log(subMenuOpen);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.menu} ${styles.menuOpen}`}>
                <ul className={styles.menuList}>
                    <li onClick={() => handleSubMenuClick(1)}>Article 1 - L2 Section 1
                        <ul className={`${styles.submenuList} ${subMenuOpen[0] ? styles.submenuOpen : ''}`}>
                            <li>L2 Section 1 - Sub section 1</li>
                            <li>L2 Section 1 - Sub section 2</li>
                            <li>L2 Section 1 - Sub section 3</li>
                        </ul>
                    </li>
                    <li onClick={() => handleSubMenuClick(2)}>Article 1 - L2 Section
                        <ul className={`${styles.submenuList} ${subMenuOpen[1] ? styles.submenuOpen : ''}`}>
                            <li>L2 Section 2 - Sub section 1</li>
                            <li>L2 Section 2 - Sub section 2</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;