package spring.api.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.api.board.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
