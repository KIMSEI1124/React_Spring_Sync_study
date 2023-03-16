package spring.api.board.service.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class BoardsDto {
    private int count;
    private List<BoardDto> boards;

    @Builder
    public BoardsDto(int count, List<BoardDto> boards) {
        this.count = count;
        this.boards = boards;
    }
}
