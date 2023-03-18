import { useState, useEffect } from 'react';
import Link from 'next/link';
import SideMenu from '../components/SideMenu';
import styles from '@/styles/Home.module.css'


function createRows(contentData, selectedKeywords, handleClick) {
  const rowsArray = []; // Create an empty array to store the rows
  let key = 0;
  for (let i = 0; contentData.length > 0 && i < contentData.length; i++) {
    const level1Content = contentData[i];
    for (let j = 0; j < level1Content.level2.length; j++) {
      const keywords = level1Content.level2[j].keywords;
      const hasKeyWords = keywords.some(word => selectedKeywords.includes(word));
      console.log('has keywords', hasKeyWords);
      const articleIndex = i;
      const articleSectionIndex = j;
      if (hasKeyWords) {
        const row = (
          <div className={`${styles['article-row']}`} key={key}>
            <h3>{level1Content.level2[j].title}</h3>
            <div dangerouslySetInnerHTML={{ __html: level1Content.level2[j].summary }} />
            <h4>{keywords}</h4>
            <button className={`${styles['read-button']}`} onClick={() => handleClick(articleIndex, articleSectionIndex)}>
              Read article
            </button>
          </div>
        );
        rowsArray.push(row); // Add the row to the array
        key++;
      }
    }
  }

  return rowsArray;
}

export default function Home() {

  const [contents, setContents] = useState([]);
  const [contentHits, setContentHits] = useState([]);
  const keywordOptions = ['Keyword 1', 'Keyword 2', 'Keyword 3'];
  const [selectedKeywordOptions, setSelectedKeywordOptions] = useState([]);
  const [selectedContentToRead, setSelectedContentToRead] = useState({}); // {articleIndex: 0, sectionIndex: 0}


  const handleOptionClick = (event) => {
    const optionValue = event.target.value;
    const isSelected = event.target.selected;
    const updatedSelectedOptions = isSelected
      ? selectedKeywordOptions.filter(option => option !== optionValue)
      : [...selectedKeywordOptions, optionValue];
    setSelectedKeywordOptions(updatedSelectedOptions);
  };

  const handleClick = (articleIndex, articleSectionIndex) => {
    console.log('Hello world', articleIndex, articleSectionIndex);
    setSelectedContentToRead({ articleIndex: articleIndex, sectionIndex: articleSectionIndex });
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/contents');
      const newData = await res.json();
      setContents(newData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedKeywordOptions);
    setContentHits(createRows(contents, selectedKeywordOptions, handleClick));
  }, [selectedKeywordOptions]);

  return (
    <div className={styles.container}>
      <Link href="/quiz">
        <button className={`${styles.anchorButton}`}>Start Quiz</button>
      </Link>
      <div className={`${styles.row} ${styles.topRow}`}>

        <label htmlFor="my-select">Select some keywords:</label>
        <select id="my-select" multiple value={selectedKeywordOptions} onChange={() => { }}>

          {keywordOptions.map(option => (
            <option key={option} value={option} onClick={handleOptionClick} selected={selectedKeywordOptions.includes(option)}>{option}</option>
          ))}
        </select>
        <p>Selected options: {selectedKeywordOptions.join(', ')}</p>
      </div>


      <div className={`${styles.row} ${styles.bottomRow}`}>{contentHits}</div>
      <div className={`${styles.row} ${styles.bottomRow}`}>
        <SideMenu selectedContentToRead={selectedContentToRead} />
      </div>
    </div>
  )
}
