package spring.api.board.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import spring.api.board.service.dto.BoardDto;

@SpringBootTest
class BoardServiceTest {

    @Autowired
    private BoardService boardService;

    @Test
    void saveAndGetTest() {
        // given
        BoardDto dto = BoardDto.builder()
                .title("제목")
                .content("내용")
                .build();
        // when
        boardService.save(dto);
        BoardDto result = boardService.getOne(1L);
        // then
        Assertions.assertThat(result.getTitle()).isEqualTo("제목");
        Assertions.assertThat(result.getContent()).isEqualTo("내용");
    }
}