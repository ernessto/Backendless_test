import styled, { css } from 'styled-components';

const styles = {
  tabsContainer: css`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 50px auto;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
  `
};

export default {
  TabsContainer: styled.div`${ styles.tabsContainer }`
}