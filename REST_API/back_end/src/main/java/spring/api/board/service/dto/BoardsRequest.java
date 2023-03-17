package spring.api.board.service.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class BoardsRequest {
    private int count;
    private List<BoardRequest> boards;

    @Builder
    public BoardsRequest(int count, List<BoardRequest> boards) {
        this.count = count;
        this.boards = boards;
    }
}
