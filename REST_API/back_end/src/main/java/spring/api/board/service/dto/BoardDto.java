package spring.api.board.service.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class BoardDto {
    private String title;
    private String content;

    @Builder
    public BoardDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
