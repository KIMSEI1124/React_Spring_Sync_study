package spring.api.board.dto.response;

import lombok.Builder;
import lombok.Data;
import spring.api.board.domain.Image;

@Data
public class BoardResponse {
    private Long id;
    private String title;
    private String content;

    private Image image;

    @Builder
    public BoardResponse(Long id, String title, String content, Image image) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
    }
}
