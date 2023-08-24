import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import userEvent from '@testing-library/user-event';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('inserir dois comentários', () => {
        render(<Post />);
        
        const textarea = screen.getByTestId('post-comments-form-textarea');
        const button = screen.getByTestId('post-comments-form-button');
        userEvent.type(textarea, 'Este é o primeiro comentário');
        fireEvent.click(button);
    
        const comentario1 = screen.getByText('Este é o primeiro comentário');
        expect(comentario1).toBeInTheDocument();
    
        userEvent.type(textarea, 'Este é o segundo comentário');
        fireEvent.click(button);
    
        const comentario2 = screen.getByText('Este é o segundo comentário');
        expect(comentario2).toBeInTheDocument();
      });
    });