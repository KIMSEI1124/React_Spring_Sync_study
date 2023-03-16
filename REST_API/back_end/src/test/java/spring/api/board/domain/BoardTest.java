package spring.api.board.domain;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BoardTest {

    @Test
    void EntityTest() {
        // given
        String title = "타이틀";
        String content = "내용";
        // when
        Board board = Board.builder()
                .title(title)
                .content(content)
                .build();
        // then
        Assertions.assertThat(board.getTitle()).isEqualTo(title);
        Assertions.assertThat(board.getContent()).isEqualTo(content);
    }
}