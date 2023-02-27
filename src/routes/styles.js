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
    font-family: sans-serif;
    text-align: center;
    min-height: 100vh;
    background-color: ${quaternaryColor};
    margin: 0;
`

export const container = css`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    text-align: center;
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

export const warningText = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${tertiaryColor};
    margin: 0;
`

export const modalContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const modalContent = css`
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
`

export const modalTitle = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${primaryColor};
    margin: 0;
    text-align: center;
    padding: 0 0 1rem 0;
`

export const listWrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    margin: 20px 0;
`

export const list = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
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
    min-width: 300px;
    padding: 10px 20px;
    background-color: ${quaternaryLighterColor};
    border-radius: 5px;
    &:hover {
        background-color: ${quaternaryDarkerColor};
    }
    @media (max-width: 300px) {
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
    background-color: ${secondaryColor};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: ${secondaryDarkerColor};
    }   
`

export const clearButton = css`
    background-color: ${tertiaryColor};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: ${tertiaryDarkerColor};
    }
`

export const inputgroup = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`

export const input = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    margin: 20px 0;
    padding: 10px 20px;
    background-color: ${quaternaryLighterColor};
    border-radius: 5px;
    border: none;
    &:focus {
        outline: none;
    }
`

export const innerButton = css`
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

export const footerText = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${primaryLighterColor};
    margin: 0;
`

export const footerLink = css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${primaryLighterColor};
    margin: 0;
    text-decoration: none;
    &:hover {
        color: ${primaryColor};
    }
`