package spring.api.board.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import spring.api.board.domain.Board;

import java.util.Optional;

@SpringBootTest
class BoardRepositoryTest {
    @Autowired
    private  BoardRepository boardRepository;

    @Test
    void saveTest() {
        // given
        String title = "타이틀";
        String content = "내용";
        Board board = Board.builder()
                .title(title)
                .content(content)
                .build();
        Board savedBoard = boardRepository.save(board);

        // when
        Optional<Board> result = boardRepository.findById(savedBoard.getId());
        if(result.isEmpty()) {
            return;
        }
        Board getBoard = result.get();

        // then
        Assertions.assertThat(getBoard.getTitle()).isEqualTo(title);
        Assertions.assertThat(getBoard.getContent()).isEqualTo(content);
    }
}