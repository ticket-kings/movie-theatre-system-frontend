package com.example;

import java.util.concurrent.TimeUnit;

import org.openjdk.jmh.annotations.*;

/**
 * Hello world!
 *
 */
@State(Scope.Benchmark)
public class App {
    @Param({ "5", "10", "15" })
    static long inp;

    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @Fork(1)
    @OutputTimeUnit(TimeUnit.NANOSECONDS)
    @Warmup(iterations = 2)
    @Measurement(iterations = 2)

    public long fib_rec_tester() {
        return fib_rec(inp);
    }

    static public long fib_rec(long in) {
        if (in < 2)
            return in;
        else
            return fib_rec(in - 1) + fib_rec(in - 2);
    }

    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
