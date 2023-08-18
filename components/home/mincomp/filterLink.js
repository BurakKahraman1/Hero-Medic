import styles from '../../../styles/FilterLink.module.css'
export default function FilterLink({title,link,target}) {
    return (
        <a href={link} target={target} className= {styles.filterLink}>
            <span className={styles.title}>{title}</span>
            <svg id="close" xmlns="http://www.w3.org/2000/svg" width="9.5" height="9.5" viewBox="0 0 9.5 9.5">
                <g id="Group_7108" data-name="Group 7108"> <path id="Path_28107" data-name="Path 28107" d="M9.5,1.33,8.17,0,4.75,3.42,1.33,0,0,1.33,3.42,4.75,0,8.17,1.33,9.5,4.75,6.08,8.17,9.5,9.5,8.17,6.08,4.75Z" fill="#767986"></path></g>
            </svg>
        </a>
    )
}