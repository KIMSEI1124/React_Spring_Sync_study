package spring.api.board.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class Image {
    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "data")
    private String value;

    public Image(String value) {
        this.value = value;
    }
}
