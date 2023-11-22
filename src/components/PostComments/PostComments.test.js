import {fireEvent, render, screen} from '@testing-library/react'

import Post from ".";

describe('Teste para postar comentarios', () => {
    test('Deve renderizar a pagina', () => {
        render(<Post />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve realizar a inserção de dois comentários', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('comment-field'), {
            target: {
                value: 'Muito bom!'
            }
        })
        fireEvent.click(screen.getByTestId('button-comment'))
        expect(screen.getByText('Muito bom!')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('comment-field'), {
            target: {
                value: 'Show!!!'
            }
        })
        fireEvent.click(screen.getByTestId('button-comment'))
        expect(screen.getByText('Show!!!')).toBeInTheDocument()
    })
})