package spring.api.board.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    private String title;

    private String content;

    @Embedded
    private Image image;

    @Builder
    public Board(String title, String content, Image image) {
        this.title = title;
        this.content = content;
        this.image = image;
    }

    public void changeContent(String content) {
        this.content = content;
    }
}
