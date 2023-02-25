import { css } from '@emotion/css'

const primaryColor = '#20262E'
const secondaryColor = '#913175'
const tertiaryColor = '#CD5888'
const quaternaryColor = '#E9E8E8'
const primaryDarkerColor = '#1A1E25'
const secondaryDarkerColor = '#7A2A5F'
const tertiaryDarkerColor = '#B84A6F'
const quaternaryDarkerColor = '#D6D5D5'
const primaryLighterColor = '#2A303A'
const secondaryLighterColor = '#9A3D8A'
const tertiaryLighterColor = '#D66A9A'
const quaternaryLighterColor = '#F5F4F4'

export const wrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${quaternaryColor};
    font-family: sans-serif;
    text-align: center;
    min-height: 100vh;
    padding: 0;
    margin: 0;
`

export const title = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: ${primaryColor};
    margin: 0;
`

export const subtitle = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${primaryLighterColor};
    margin: 0;
`

export const listWrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
`

export const list = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
    padding: 0;
    list-style: none;
`

export const listItem = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 400px;
    padding: 10px 20px;
    margin: 10px 0;
    background-color: ${quaternaryLighterColor};
    border-radius: 5px;
    &:hover {
        background-color: ${quaternaryDarkerColor};
    }
    @media (max-width: 500px) {
        max-width: 100%;
        min-width: 0;
    }
`

export const listItemText = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${primaryColor};
    margin: 0;
`

export const listItemButton = css`
    color: ${secondaryColor};
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
        color: ${tertiaryDarkerColor};
    }
`
export const button = css`
    background-color: ${primaryColor};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: ${primaryDarkerColor};
    }   
`

export const inputgroup = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const input = css`
    background-color: ${quaternaryColor};
    border: 1px solid ${secondaryColor};
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px 0;
    font-size: 16px;
    &:focus {
        outline: none;
        border: 1px solid ${secondaryDarkerColor};
    }
`