package spring.api.board.dto.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class BoardsResponse {
    private int count;
    private List<BoardResponse> boards;

    @Builder
    public BoardsResponse(int count, List<BoardResponse> boards) {
        this.count = count;
        this.boards = boards;
    }
}
