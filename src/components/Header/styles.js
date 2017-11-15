import styled, { css } from 'styled-components';

const styles = {
  tabsContainer: css`
    display: flex;
    list-style: none;
    padding-left: 0;
    border-bottom: 1px solid grey;
    justify-content: center;
  `,
  tab: css`
    font-size: 20px;
    // background-color: rgba(7,227,255,.2);
    color: black;
    box-sizing: border-box;
    
    > a {
      text-decoration: none;
      display: inline-block;
      position: relative;
      top: 1px;
      border: 1px solid grey;
      padding: 10px 30px;
      transition: background-color .3s;
      &:hover {
        background-color: rgb(245,245,245);
      }
      &:active {
        color: inherit;
      }
    }
    > a.active {
      background-color: rgb(240,240,240);
      border-bottom-color: #fff;
    }
  `
};

export default {
  TabsContainer: styled.ul`${styles.tabsContainer}`,
  Tab: styled.li`${styles.tab}`
}
