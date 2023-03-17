package spring.api.board.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
public class BoardResponse {
    private Long id;
    private String title;
    private String content;

    @Builder
    public BoardResponse(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
