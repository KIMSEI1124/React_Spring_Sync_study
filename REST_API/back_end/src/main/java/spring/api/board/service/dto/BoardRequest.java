package spring.api.board.service.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class BoardRequest {
    private Long id;
    private String title;
    private String content;

    @Builder
    public BoardRequest(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
